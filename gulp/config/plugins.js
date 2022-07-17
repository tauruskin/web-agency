import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify";  //Сообщения(подсказки)
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";


export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}