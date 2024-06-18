const data={
    userFirstName: 'sandeep',
    userLastName: 'kumar',
    userID: 12,
    Add: 'delhi',
     getDetail:function(){
        console.log(this);
        console.log(`name is ${this.userFirstName} ${this.userLastName}`);
    }
}
console.log(data.getDetail());