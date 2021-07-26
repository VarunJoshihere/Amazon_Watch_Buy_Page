import React, {Component} from 'react';
import styled from "styled-components";


import classes from './App.module.css';
import { useState } from 'react';
import ProductData from './utils/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import { render } from '@testing-library/react';



class App extends Component {
  // state = {
  //   productData: ProductData,
  //   currentPreviewImage : 'https://imgur.com/xSIK4M8.png',
  //   showHeartBeatSection: false,
     
  // }
  state = {
    productData: ProductData,
    currentPreviewImagePos : 0,
    showHeartBeatSection: false,
     
  }
  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImagePos : pos});
  }
  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if(pos===1){
      updatedState= true;
    }
    this.setState({showHeartBeatSection: updatedState})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <nav className={classes.Topbar}>
        <img src="./amz.jpg" alt="AMAZON LOGO"/>


      </nav>


      </header>
      <div className={classes.MainContainer}>
        {/* <div className={classes.ProductPreview}>
          <img src="https://i.imgur.com/iOeUBV7.png" alt="Product Preview"/>
          {/* <div className={classes.TimeSection}>
            

          <p>{`${currentHour}:${currentMinute}`}</p>
        // </div> */}
          
            

        {/* //   <div className={classes.HeartBeatSection}>
        //     <i class="fas fa-heartbeat"></i>

        //     <p>78</p>
        //     </div>  */}
        {/* <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/> */}
        <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection}/>
        
       
        {/* <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img className={classes.ProductImage,classes.SelectedProductImage} src="https://imgur.com/iOeUBV7.png" alt="BLACK COLOURED"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="RED COLOURED"/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="BLUE COLOURED"/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="PURPLE COLOURED"/>
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
          <button className={classes.FeatureItem,classes.SelectedFeatureItem}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div> */}
        <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}  currentPreviewImagePos={this.state.currentPreviewImagePos}
        onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
      </div>


    </div>
  );}
}


export default App;
