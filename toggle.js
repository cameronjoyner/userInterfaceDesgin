$("#toggle-radius").click(function(){    
    var example_button = document.getElementById("example-button");

    if(example_button.classList.contains('radius-1')){
        example_button.classList.remove('radius-1');
    } else {
        example_button.classList.add('radius-1');
    }
});
