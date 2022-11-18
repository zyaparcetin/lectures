const dayInMs = 1000 * 60 * 60 * 24
const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

class Reservation {
  _startDate = today
  _endDate

  set startDate(date) {
    if (date >= today) {
      this._startDate = date
    } else {
      throw new Error('start date should be today or in the future')
  }
}

  set endDate(date) {
    if (date > this._startDate) {
      this._endDate = date
    } else {
      throw new Error('end date should be later than start date');  
    }
  }

  get duration() {
    return (this._endDate - this._startDate) / dayInMs
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
