const {date} = require('../algorithms/7_whoWantsADate.js')
const {expect} = require('chai')

describe('7. Who Wants A Date', function() {
  it('Changes all dates to ISO 8601 format', function(){
    var input = "01/11/55" //mm/dd/yy
    expect(date(input)).to.equal('1955-01-11');
  })
  it('Changes all dates to ISO 8601 format', function(){
    var input = "09#65#21" //mm#yy#dd
    expect(date(input)).to.equal("1965-09-21");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var input = "06*04*1965" //dd*mm*yyyy
    expect(date(input)).to.equal("1965-04-06");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var input = "Oct 25, 58" //(month in words) dd, yy
    expect(date(input)).to.equal("1958-10-25");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var input = "Mar 21, 1980" //(month in words) dd, yyyy
    expect(date(input)).to.equal("1980-03-21");
  })
})
