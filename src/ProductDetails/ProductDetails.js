import React from 'react';
import classes from './ProductDetails.module.css';
// import ProductData from './ProductData';


const ProductDetails = (props) => {
    console.log(props.data);
    const colorOptions  = props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage]
        if(pos=== props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img  key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );

    })
    const featureList = props.data.featureList.map((item,pos)=>{
        const classArr = [classes.FeatureItem];
        if(pos===1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        } else if(pos===0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button onClick={()=>props.onFeatureItemClick(pos)} key ={pos}className={classArr.join(' ')}>{item}</button>
        )
    })
    return (
        <div className={classes.ProductData}>
        {/* <h1 className={classes.ProductTitle}>{ProductData.title}</h1> */}
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        {/* <p className={classes.ProductDescription}>{ProductData.description}</p> */}
        <p className={classes.ProductDescription}>{props.data.description}</p>
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
          {/* <img className={classes.ProductImage,classes.SelectedProductImage} src="https://imgur.com/iOeUBV7.png" alt="BLACK COLOURED"/>
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="RED COLOURED"/>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="BLUE COLOURED"/>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="PURPLE COLOURED"/>
        */}
        {colorOptions}
        </div> 
        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
        {/* <button className={classes.FeatureItem,classes.SelectedFeatureItem}>Time</button>
          <button className={classes.FeatureItem}>Heart Rate</button> */}
          {featureList}
        </div>
        <button className={classes.PrimaryButton}>Buy Now</button>
      </div>
    );
}
export default ProductDetails;