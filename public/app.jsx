//This file adds React


//Using react to create a menu bar using React and Bootstrap
var MyReactBootstrapButton = React.createClass({
    render: function() {

        var ButtonGroup = ReactBootstrap.ButtonGroup,
            Button  = ReactBootstrap.Button;

        return (<div>
            <ButtonGroup>
                <Button bsStyle="success" href="landing.html">Home </Button>
                <Button bsStyle="success" href="login.html">Login</Button>
                <Button bsStyle="success" href="bucket.html">Bucket</Button>
                <Button bsStyle="success" href="trending.html">Trending</Button>
            </ButtonGroup>
        </div>);
    }
});

React.render(<MyReactBootstrapButton />, document.getElementById("container"));


//Using React to add a link to our github page
var ProductItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
});

class Avatar extends React.Component {
    render() {
        return (
            <div>
                <PagePic pagename={this.props.pagename} />
                <PageLink pagename={this.props.pagename} />
            </div>
        );
    }
}

class PagePic extends React.Component {
    render() {
        return (
            <img src={'image/' + this.props.pagename + '/GitHub_logo.png'} />
        );
    }
}

class PageLink extends React.Component {
    render() {
        return (
            <a href={'https://github.com/Pakeezha/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        );
    }
}

React.render(
    <Avatar pagename="RecipeBucket" />,
    document.getElementById('git')
);
