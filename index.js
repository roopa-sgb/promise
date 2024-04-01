function walktheDog(callback){
    setTimeout(() => console.log("Walked the Dog !"),500);
    callback();
}
function cleantheKitchen(callback){
    setTimeout(() => console.log("Cleaned The Kitchen !"),1500);
    callback();

}
function takeTrashout(callback){
    setTimeout(() => console.log('Trash Is Taken Out !'),2000);
    
    callback();
}

walktheDog(() => {
    cleantheKitchen(() => {
        takeTrashout(() => {console.log("All Tasks Completed !")});
    })
});

