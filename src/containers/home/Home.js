import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPlanetList } from '../../redux/actions'
import PropTypes from 'prop-types';
import './Home.css';

export class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
        selectedPlanet : null
    }

      this.updateSelectedPlanet = this.updateSelectedPlanet.bind(this);
      this.goToPlanetInfoPage = this.goToPlanetInfoPage.bind(this);

  }

    updateSelectedPlanet = (e) => {
        this.setState({selectedPlanet: e.target.value})
    }

    goToPlanetInfoPage = () => {
        let url = `/planets/${this.state.selectedPlanet}`
        this.props.changePage(url)
    }

    componentDidMount() {

        !this.props.planetList && this.props.getPlanetList()

  }

  render(props) {

      const {planetList = []} =  this.props;

      const planetSelectOptions = planetList.map((planet,i) =>
                <option key={i} value={planet.name}> {planet.name} </option>
            );

      return (
          <div className="Home">
              <h1>Please select a planet:</h1>

                <select onChange = {this.updateSelectedPlanet}>
                    <option value={null}>Please select</option>
                    {planetSelectOptions}
                </select>

              <p><button disabled={!this.state.selectedPlanet} onClick={() => this.goToPlanetInfoPage()}>Get planet info</button></p>
          </div>
        );
  }
}

Home.propTypes = {
    planetList : PropTypes.array,
    changePage : PropTypes.func,
    getPlanetList : PropTypes.func

};

const mapStateToProps = state => ({
    planetList: state.planetInfo.planetList
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPlanetList,
    changePage: (url) => push(url)

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
