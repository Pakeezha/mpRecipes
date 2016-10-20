

//Defining the functionality of all the scenarios
describe("search-page", function() {
    it("the user is able to search an ingredient in the search engine", function() {
        expect(1).toEqual(1);
    });
});

describe("search-page", function() {
    it("the user is able to pick from a list of advanced searches to minimize their search", function() {
        expect(1).toEqual(1);
    });
});

describe("search-page", function() {
    it("the user is able to add extra ingredients to search", function() {
        expect(1).toEqual(1);
    });
});
describe("log-in page", function() {
    it("the user is able to add their credentials and get navigated to an account ", function() {
        expect(1).toEqual(1);
    });
});
describe("log-in page", function() {
    it("the user is able to register to make an account if they do not have one", function() {
        expect(1).toEqual(1);
    });
});
describe("trending page", function() {
    it("the user is able to look up and navigate to the recipe of what is trending", function() {
        expect(1).toEqual(1);
    });
});
describe("landing page", function() {
    it("the user is able to choose from a menu bar to navigate to different pages", function() {
        expect(1).toEqual(1);
    });
});

//testing if the hello message is displayed on the login page
describe("Hello message", function() {
    it("says hello", function() {
        expect(example).toEqual("Hello");
    });
});


//If you click on the register button, it causes firebase to push
describe("can click on login/register", function(){
    var TestUtils = React.addons.TestUtils;
    var todoAppComponent, element, renderedDOM;

    beforeEach(function (done) {
        element = React.createElement(MyReactBootstrapButton);
        todoAppComponent = TestUtils.renderIntoDocument(element);
        todoAppComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Causes fireBase push to be called", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"button");
        TestUtils.Simulate.click(button); expect(todoAppComponent.fireRef.push).toHaveBeenCalledWith({"text": ""});
    });

    it("can click on login/register", function(){
    var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"button"); TestUtils.Simulate.click(button);
    });
});


//testing if the react menu bar on the search page
describe("Login menu link", function() {

    var TestUtils = React.addons.TestUtils;
    var todoAppComponent, element;

    beforeEach(function (done) {
        element = React.createElement(MyReactBootstrapButton);
        todoAppComponent = TestUtils.renderIntoDocument(element);
        todoAppComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Can click on login button", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"login");
        TestUtils.Simulate.click(button);
    });
});

//testing if the react menu bar on the search page
describe("trending menu link", function() {

    var TestUtils = React.addons.TestUtils;
    var todoAppComponent, element;

    beforeEach(function (done) {
        element = React.createElement(MyReactBootstrapButton);
        todoAppComponent = TestUtils.renderIntoDocument(element);
        todoAppComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Can click on trending button", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"trending");
        TestUtils.Simulate.click(button);
    });
});

//testing if the react menu bar on the search page
describe("search menu link", function() {

    var TestUtils = React.addons.TestUtils;
    var todoAppComponent, element;

    beforeEach(function (done) {
        element = React.createElement(MyReactBootstrapButton);
        todoAppComponent = TestUtils.renderIntoDocument(element);
        todoAppComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Can click on search button", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"search");
        TestUtils.Simulate.click(button);
    });
});

//testing if the react menu bar on the search page
describe("landing menu link", function() {

    var TestUtils = React.addons.TestUtils;
    var todoAppComponent, element;

    beforeEach(function (done) {
        element = React.createElement(MyReactBootstrapButton);
        todoAppComponent = TestUtils.renderIntoDocument(element);
        todoAppComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Can click on landing button", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent,"landing");
        TestUtils.Simulate.click(button);
    });
});

//Creating a spy to check if clicking on the register button pushes information to the database

describe("testing register button", function() {
    describe("Does it push anything to firebase?", function () {
        var regButton= Document.getElementById("Register");
        beforeEach(function () {
            spyOn(regButton.fireRef, "push");
        });
        it("Causes fireBase push to be called", function () {
            TestUtils.Simulate.click(regButton);
            expect(regButton.fireRef.push).toHaveBeenCalledWith({"text": ""});
        });
    });
});