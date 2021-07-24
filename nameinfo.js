class Info{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Shreya virtual pet");
        title.position(130,0);
        var input=createInput("name");
        var button=createButton('Proceed');
        var greeting=createElement('h3');
        var greeting2=createElement('h4');
        input.position(250,160);
        button.position(300,200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name=input.value();
            
            greeting.html("This is "+name);
            greeting.position(250,260);
            greeting2.html("Feed the Dog with Milk ");
            greeting2.position(250,280);

            
        });
    }
}