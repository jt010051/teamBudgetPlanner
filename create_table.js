var app = new function() {
    this.el = document.getElementById('countries');
    this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];
this.Count = function(data) {
 var el = document.getElementById('counter');
 var name = 'country';
 if (data) {
  if (data > 1) {
   name = 'countries';
  }
  el.innerHTML = data + ' ' + name ;
 } else {
  el.innerHTML = 'No ' + name;
 }
};    
this.FetchAll = function() {
    var data = '';
    if (this.countries.length > 0) {
     for (i = 0; i < this.countries.length; i++) {
      data += '<tr>';
      data += '<td>' + this.countries[i] + '</td>';
      data += '</tr>';
     }
    }
    
    this.Count(this.countries.length);
    return this.el.innerHTML = data;
   };

}

   app.FetchAll();
   