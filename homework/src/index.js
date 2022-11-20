/*
  Change the reservation class below to ensure date integrity and consistency.


  - The start date should always be before the end date.
  - The start date should always be today or in the future.
  - The end date should always be at least 1 day after the start date.
  - The end date should always be at least 1 day after today.
*/


const dayInMs = 1000 * 60 * 60 * 24
const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())


class Reservation {
  #startDate
  #endDate


  get duration() {
    return (this.#endDate - this.#startDate) / dayInMs
  }

  set startDate(newDate) {
    if (newDate >= today) {
      this.#startDate = newDate
    } else {
      throw new Error('start date should be today or in the future')
  }
}

  set endDate(newDate) {
    if (newDate > this.#startDate) {
      this.#endDate = newDate
    } else {
      throw new Error('end date should be later than start date');  
    }
  }
}


/*function shouldPrintDuration2() {
  const reservation = new Reservation()


  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-20')


  console.log(reservation.duration)
}*/


function shouldThrowErrorEndDateIsSmaller() {
  const reservation = new Reservation()


  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-05')


  console.log(reservation.duration)
}


/*function shouldThrowErrorStartDateInThePast() {
  const reservation = new Reservation()


  reservation.startDate = new Date('2022-11-05')
  reservation.endDate = new Date('2022-11-18')


  console.log(reservation.duration)
}


function shouldThrowErrorEndDateIsToday() {
  const reservation = new Reservation()


  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-18')


  console.log(reservation.duration)
}


function shouldThrowErrorEndDateIsSmallerThanToday() {
  const reservation = new Reservation()


  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-17')


  console.log(reservation.duration)
}
*/

shouldPrintDuration2()
shouldThrowErrorEndDateIsSmaller()
shouldThrowErrorStartDateInThePast()
shouldThrowErrorEndDateIsToday()
shouldThrowErrorEndDateIsSmallerThanToday()
