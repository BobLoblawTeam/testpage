import React, {Component} from 'react';

var Tabs = React.createClass({
    displayName: 'Tabs',
    propTypes: {
        selected: React.PropTypes.number,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
        ]).isRequired
    },
    getDefaultProps: function () {
        return {
            selected: 0
        };
    },
    getInitialState: function () {
        return {
            selected: this.props.selected
        };
    },
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    },
    handleClick: function (index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    },
    _renderTitles: function () {
        function labels(child, index) {
            var activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                    <a href="#"
                       className={activeClass}
                       onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                        <span>{child.props.value}</span>
                    </a>
                </li>
            );
        }

        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    },
    _renderContent: function () {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        );
    },
    render: function () {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        );
    }
});

var Pane = React.createClass({
    displayName: 'Pane',
    propTypes: {
        label: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    },
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

var TabsContainer = React.createClass({
    render: function () {
        return (
            <Tabs selected={0}>
                <Pane label="Cash" value="$35,845">
                    <dl>
                        <dt> Internet Price</dt>
                        <dd>$33,929</dd>
                        <dt>Dealer Price</dt>
                        <dd>$36,095</dd>
                        <dt>Chevy Bonus Cash1</dt>
                        <dd>$250</dd>
                        <dt>Sale Price</dt>
                        <dd>$35,845</dd>
                        <dt>Total Savings</dt>
                        <dd>$250</dd>
                    </dl>
                </Pane>
                <Pane label="Finance" value="$542/mo">
                    <p>Finance for $541.42 per month at 0.00% APR for 60 months with $3,609.50 down payment.
                        Payment expires on 07/31/2017</p>
                        <p>
                            <span> Estimated Finance payment based upon 0.00% APR for 60 months, with a down payment of $3,609.50. Excludes title, taxes, registration, and license fees. Some customers will not qualify. See your authorized dealer for complete details on this and other offers. Residency restrictions may apply.</span>
                        </p>
                </Pane>
                <Pane label="Lease" value="$631/mo">
                        <p>Lease for $630.81/month for 36 months with $3,609.50 due at signing including $0.00 Security
                            Deposit and 10,000.00 miles per year. Payment expires on 07/31/2017</p>
                        <p>
                            <span> Estimated Lease payment based on 36 months and $3,609.50 due at lease signing. Cash due at signing includes $2,978.69 capitalization cost reduction, $595.00 acquisition fee, a required security deposit of $0.00, and first month's lease payment of $630.81. Excludes title, taxes, registration, and license fees. Total monthly payments equal $630.81. Mileage charge of $0.20 per mile over 30,000.00 miles. Not all consumers will qualify. Residency restrictions may apply.</span>
                        </p>
                </Pane>
            </Tabs>
        );
    }
});

class TabsModule extends Component {
    render() {
        return (
            <TabsContainer />
        );
    }
}
export default TabsModule;
