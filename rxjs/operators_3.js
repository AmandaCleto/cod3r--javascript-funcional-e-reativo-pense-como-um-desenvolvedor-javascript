
const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

ajax({
    createXHR: () => xhr,
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
    .pipe(
        map(resp => resp.xhr.response),
        concatAll(),
        map(repo => repo.full_name)
    )
    .subscribe(console.log)


