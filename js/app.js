
// Budget Controller Module
var budgetController = (function() {
    
})();


// UI Controller Module
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
        
    }
    return {
        getInput: function(){
          return {
            type: document.querySelector(DOMstrings.inputType).value, //inc or exp depending on selection
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value 
          }
        }
        
        getDOMStrings: function(){
            return DOMstrings;
        }
    };
    
})();


// App Controller Module
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMStrings;
    
    var ctrlAddItem = function() {
        var input = UICtrl.getInput;
    }
    
    document.querySelector(DOM.inputBtn)).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        
        if (event.keyCode === 13 || event.which === 13){
            //event.which for older browsers that do not have event.keyCode prop
            ctrlAddItem();
        }
        
    });
    
    
})(budgetController,UIController);