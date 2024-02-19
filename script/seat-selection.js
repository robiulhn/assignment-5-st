// Scroll Section

function bookSeat() {
    const element = document.getElementById('seat-booking');
    const bookingSection = document.getElementById('booking-section');

    element = bookingSection.scrollIntoView();
}


// Seat Selection

const allSeat = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let seatAvailable = 40;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {

        if (seatCount <= 3) {
            seat.disabled = true;
            seat.style.backgroundColor = '#1DD100';
            seat.style.color = 'white';

            const seatNumber = e.target.innerText;





            seatCount += 1;
            changeInnerText('seat-count', seatCount);
            seatAvailable -= 1;
            changeInnerText('available-seats', seatAvailable);


            // adding selected seats to amount section

            const seatInfo = document.getElementById('seat-num');
            const classInfo = document.getElementById('class');
            const priceInfo = document.getElementById('ticket-price');

            const liN = document.createElement('li');
            liN.innerText = seatNumber;
            const liC = document.createElement('li');
            liC.innerText = 'Economy';
            const liP = document.createElement('li');
            liP.innerText = 550;

            seatInfo.appendChild(liN);
            classInfo.appendChild(liC);
            priceInfo.appendChild(liP);


            // total-price
            const totalPrice = document.getElementById('total-price').innerText;
            const convertedTotalPrice = parseInt(totalPrice);
            const sum = convertedTotalPrice + parseInt(liP.innerText);
            changeInnerText('total-price', sum);

            // grand total
            const grandTotal = document.getElementById('grand-total').innerText;
            const convertedGrandTotal = parseInt(grandTotal);
            const sum2 = convertedGrandTotal + parseInt(liP.innerText);
            changeInnerText('grand-total', sum2);



        
            // Coupon and grand total
            document.getElementById('coupon-code').addEventListener('keyup', function (event) {
                const couponCode = event.target.value;
                const couponButton = document.getElementById('coupon-button');


                if (couponCode === 'NEW15' || couponCode === 'Couple 20') {
                    couponButton.removeAttribute('disabled');

                    couponButton.addEventListener('click', function () {
                        const couponCodeContainer = document.getElementById('coupon-code-container');
                        couponCodeContainer.classList.add('hidden');

                        // const grandTotal = document.getElementById('grand-total').innerText;
                        // const convertedGrandTotal = parseInt(grandTotal);
                        if (couponCode === 'NEW15') {
                            const sum3 = sum2 * 0.15;
                            const finalSum = sum2 - sum3;
                            changeInnerText('grand-total', finalSum.toFixed(0));
                        }
                        else if (couponCode === 'Couple 20') {
                            const sum3 = sum2 * 0.2;
                            const finalSum = sum2 - sum3;
                            changeInnerText('grand-total', finalSum);
                        }

                    })


                }

                else {
                    couponButton.setAttribute('disabled')
                }

            })

        }

        else {
            alert('You can book maximum 4 seats at a time.');
        }


    })

    


}



document.getElementById('continue').addEventListener('click', function () {
    location.reload();
})


// Common inner text changing function
function changeInnerText(id, value) {
    document.getElementById(id).innerText = value;
}