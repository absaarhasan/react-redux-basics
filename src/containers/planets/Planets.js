import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPlanetData, clearPlanetData } from '../../redux/actions'
import _ from 'underscore'

import './Planets.css';

export class Planets extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedPlanetUrl : null
    }
    this.updateSelectedPlanetURL = this.updateSelectedPlanetURL.bind(this);
  }

  updateSelectedPlanetURL(planet){
    let planetUrl = _.findWhere(this.props.planetList, {name : planet}).url
    this.setState({selectedPlanetUrl: planetUrl});
  }

  componentWillMount() {
    this.props.planetList ? this.updateSelectedPlanetURL(this.props.selectedPlanet) : this.props.backButton()
  }

  componentDidMount() {
    let url = this.state.selectedPlanetUrl
    this.props.getPlanetData(url)
  }

    componentWillUnmount() {
        this.props.clearPlanetData()
    }

    render() {

    const {planetData = []} =  this.props;

    const planetDataRows = planetData.map((row,i) =>
        <tr key={i}>
            <th>{row.key}</th>
            <td>{row.value}</td>
        </tr>
    );

    return (

      <div className="Planets">
          <h1>Planet Info:</h1>
          <table>
            <tbody>
              {planetDataRows}
            </tbody>
          </table>
          <button onClick={() => this.props.backButton()}>Back</button>
      </div>
    );
  }
}

Planets.propTypes = {
    backButton: PropTypes.func,
    clearPlanetData : PropTypes.func,
    getPlanetData : PropTypes.func,
    planetData : PropTypes.array,
    planetList : PropTypes.array,
    selectedPlanet : PropTypes.string
};

const mapStateToProps = (state , ownProps) => ({
  selectedPlanet: ownProps.match.params.planet,
  planetList: state.planetInfo.planetList || null,
  planetData: state.planetInfo.planetData || []
})

const mapDispatchToProps = dispatch => bindActionCreators({
    clearPlanetData,
  getPlanetData,
  backButton: () => push('/')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planets)
