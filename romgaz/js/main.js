const employees = document.querySelector("#employees")
noUiSlider.create(employees, {
  start: 1500,
  connect: [true, false],

  tooltips: {
    to: function(value) {
        return Math.trunc(value) + "RON"
    }
  },
  range: {
    'min': 1500,
    '50%': 15000,
    'max': 25000
  },
  
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return value + "RON";
      }
    }
  }
});
var calc_result = document.getElementById('calc_result');
 employees.noUiSlider.on('update', function (values, handle) {
     calc_result.innerHTML = Math.trunc(values[handle] * 3.5) + "RON";
     
 });


 
