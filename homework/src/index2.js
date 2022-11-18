const dayInMs = 1000 * 60 * 60 * 24
const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

class Reservation {
  startDate
  endDate

  get duration() {
    if (
      (this.endDate - this.startDate) / dayInMs > 0 &&
      today.setHours(0, 0, 0, 0) / dayInMs < this.startDate / dayInMs
    ) {
      return (this.endDate - this.startDate) / dayInMs
    } else {
      console.log('please enter valid dates')
    }
  }
}
function shouldPrintDuration2() {
  const reservation = new Reservation()

  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-20')

  console.log(reservation.duration)
}

function shouldThrowErrorEndDateIsSmaller() {
  const reservation = new Reservation()

  reservation.startDate = new Date('2022-11-18')
  reservation.endDate = new Date('2022-11-05')

  console.log(reservation.duration)
}

function shouldThrowErrorStartDateInThePast() {
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

shouldPrintDuration2()
shouldThrowErrorEndDateIsSmaller()
shouldThrowErrorStartDateInThePast()
shouldThrowErrorEndDateIsToday()
shouldThrowErrorEndDateIsSmallerThanToday()
