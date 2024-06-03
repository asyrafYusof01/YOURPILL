// app.js

document.addEventListener('DOMContentLoaded', () => {
    const pillOptions = document.querySelectorAll('.pill-options button');
    const pillImage = document.getElementById('pill-image');
    const pillDescription = document.getElementById('pill-description');
    const dispenseButton = document.getElementById('dispense-button');
    const pillAmount = document.getElementById('pill-amount');

    const pills = {
        "Pill 1": {
            image: "images/panadol.jpg",
            description: {
                dosage: "500mg",
                adult: "2 pills per day",
                adolescence: "1 pill per day"
            }
        },
        "Pill 2": {
            image: "images/pill2.jpg",
            description: {
                dosage: "250mg",
                adult: "1 pill per day",
                adolescence: "1/2 pill per day"
            }
        },
        "Pill 3": {
            image: "images/pill3.jpg",
            description: {
                dosage: "400mg",
                adult: "3 pills per day",
                adolescence: "1.5 pills per day"
            }
        },
        "Pill 4": {
            image: "images/pill4.jpg",
            description: {
                dosage: "150mg",
                adult: "1 pill per day",
                adolescence: "1/2 pill per day"
            }
        },
        "Pill 5": {
            image: "images/pill5.jpg",
            description: {
                dosage: "100mg",
                adult: "1 pill per day",
                adolescence: "1 pill every other day"
            }
        },
        "Pill 6": {
            image: "images/pill6.jpg",
            description: {
                dosage: "200mg",
                adult: "2 pills per day",
                adolescence: "1 pill per day"
            }
        },
        "Pill 7": {
            image: "images/pill7.jpg",
            description: {
                dosage: "300mg",
                adult: "2 pills per day",
                adolescence: "1 pill per day"
            }
        },
        "Pill 8": {
            image: "images/pill8.jpg",
            description: {
                dosage: "600mg",
                adult: "1 pill per day",
                adolescence: "1/2 pill per day"
            }
        },
        "Pill 9": {
            image: "images/pill9.jpg",
            description: {
                dosage: "350mg",
                adult: "2 pills per day",
                adolescence: "1 pill per day"
            }
        },
        "Pill 10": {
            image: "images/pill10.jpg",
            description: {
                dosage: "450mg",
                adult: "1 pill per day",
                adolescence: "1/2 pill per day"
            }
        }
    };

    pillOptions.forEach(button => {
        button.addEventListener('click', () => {
            pillOptions.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            const pillName = button.getAttribute('data-pill');
            pillImage.src = pills[pillName].image;
            pillDescription.innerHTML = `<strong>Dosage:</strong> ${pills[pillName].description.dosage}<br>
                                         <strong>Adult:</strong> ${pills[pillName].description.adult}<br>
                                         <strong>Adolescence:</strong> ${pills[pillName].description.adolescence}`;
        });
    });

    dispenseButton.addEventListener('click', () => {
        const selectedPill = document.querySelector('.pill-options button.selected');
        if (selectedPill) {
            const pillName = selectedPill.getAttribute('data-pill');
            const amount = pillAmount.value;
            alert(`Dispensing ${amount} of ${pillName}`);
        } else {
            alert('Please select a pill first.');
        }
    });
});
