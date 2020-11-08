 const fs = require('fs');



 let homeworkList = [];

 const loadDB = () => {


     try {
         homeworkList = require('../db/data.json');
     } catch (error) {
         homeworkList = [];
     }

 }

 const saveDB = () => {

     let data = JSON.stringify(homeworkList);


     fs.writeFile('db/data.json', data, (err) => {
         if (err) throw new Error('cant load', err);
     })
 }

 const addDescription = (description) => {
     loadDB();

     let toDo = {
         description,
         complete: false
     }
     homeworkList.push(toDo)
     console.log("---------uptaded correctly--------");

     saveDB();
 }

 const listHomeworks = () => {
     let listDB = require('../db/data.json');
     return listDB
 }

 const uptadeHomeworks = (description, complete = true) => {
     loadDB();

     let index = homeworkList.findIndex(homework => homework.description === description)

     if (index >= 0) {
         homeworkList[index].complete = complete;
         saveDB();
         return true
     } else {

         return false
     }
 }

 const deleteHomework = (homeworkDesc) => {
     loadDB();
     let newHomeworkList = homeworkList.filter(homework => homework.description !== homeworkDesc)


     if (newHomeworkList.length === homeworkList.length) {
         return false
     } else {
         homeworkList = newHomeworkList;
         saveDB();
         return true
     }
 }
 module.exports = {
     addDescription,
     listHomeworks,
     uptadeHomeworks,
     deleteHomework
 }