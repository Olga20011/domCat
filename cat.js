
setTimeout(()=>{
    console.log("I am coding")

},3000)


var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        // This outputs outer func:this.name=bar because we are a variable self has been declared ,which
        // stores a value called this."This refers to the object therefore returning this.name as bar"
        console.log("outer func:  self.name = " + self.name);
        // This outputs outer func:this.self=bar because self is a variable storing this identifier ,which
        //  refers to the object and the object has a property name which name is bar. 
        (function() {
            console.log("inner func:  this.name = " + this.name);
            // This outputs inner func: this.name=undefined because this function can not access what is 
            // in the outer function therefore name is undefined

            console.log("inner func:  self.name = " + self.name);

        }());
    }
};

lisaLab.func();
