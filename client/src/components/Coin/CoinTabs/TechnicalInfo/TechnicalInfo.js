import "./TechnicalInfo.css";
import React, { Component } from "react";
import { getBio } from "../../../../functions";

class TechnicalInfo extends Component {
  render() {
    if (this.props.props) {
      var {
        Algorithm,
        BlockNumber,
        BlockReward,
        DifficultyAdjustment,
        Description,
        NetHashesPerSecond,
        ProofType,
        StartDate,
        TotalCoinSupply,
        TotalCoinsMined,
        Name,
        ImageUrl
      } = this.props.props.coinSnapFull;
    }
    let imgPath = "https://www.cryptocompare.com" + ImageUrl;
    let bio = getBio(Description);
    console.log("BlockNumber :", BlockNumber);
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <h1>
              <strong>About {Name}</strong>
            </h1>
            <img src={imgPath} alt="about" className="img-about" />
          </div>
          <div className="bio">
            {bio.map((current, i) => {
              return <p key={i}>{current}</p>;
            })}
          </div>
          <div className="tech-info">
            <h1>
              <strong>Technical Info</strong>
            </h1>
          </div>
          <div className="card-block">
            <p>
              <strong>
                Algorithm:
                <br />
              </strong>
              {Algorithm ? Algorithm : "N/A"}
            </p>
            <p>
              <strong>
                Proof Type:
                <br />
              </strong>
              {ProofType ? ProofType : "N/A"}
            </p>
            <p>
              <strong>
                Block Number:
                <br />
              </strong>
              {BlockNumber ? BlockNumber : "N/A"}
            </p>
            <p>
              <strong>
                Block Reward:
                <br />
              </strong>
              {BlockReward ? BlockReward : "N/A"}
            </p>
            <p>
              <strong>
                DifficultyAdjustment:
                <br />
              </strong>
              {DifficultyAdjustment ? DifficultyAdjustment : "N/A"}
            </p>
            <p>
              <strong>
                Net Hashes Per Second:
                <br />
              </strong>
              {NetHashesPerSecond ? NetHashesPerSecond : "N/A"}
            </p>
            <p>
              <strong>
                Start Date:
                <br />
              </strong>
              {StartDate ? StartDate : "N/A"}
            </p>
            <p>
              <strong>
                Total Coins Mined:
                <br />
              </strong>
              {TotalCoinsMined ? TotalCoinsMined : "N/A"}
            </p>
            <p>
              <strong>
                Total Coin Supply:
                <br />
              </strong>
              {TotalCoinSupply ? TotalCoinSupply : "N/A"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicalInfo;

// const TechnicalInfo = props => {
//   render() {
//     if (!props.coinsSnapFull) {

//     return (

//       <div id="preloader">
//         <div id="loader" />
//       </div>
//     )
//     }  else {

//    return (

//       <div className="card-container">
//         <div className="card">
//           <div className="card-header">
//             <h1>About {Name}</h1>
//             <img src={imgPath} alt="about" className="img-about" />
//           </div>
//           <div className="bio">
//             {/* {props.bio.map((current, i) => {
//           return <p key={i}>{current}</p>;
//         })} */}
//             c bio
//           </div>
//           <div className="tech-info">
//             <strong>
//               <h1>Technical Info</h1>
//             </strong>
//           </div>
//           <div className="card-block">
//             <p>
//               <strong>
//                 Algorithm:
//                 <br />
//               </strong>
//               {/* {Algorithm ? Algorithm : "N/A"} */}
//             </p>
//             <p>
//               <strong>
//                 Proof Type:
//                 <br />
//               </strong>
//               {ProofType ? ProofType : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Block Number:
//                 <br />
//               </strong>
//               {BlockNumber ? BlockNumber : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Block Reward:
//                 <br />
//               </strong>
//               {BlockReward ? BlockReward : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 DifficultyAdjustment:
//                 <br />
//               </strong>
//               {DifficultyAdjustment ? DifficultyAdjustment : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Net Hashes Per Second:
//                 <br />
//               </strong>
//               {NetHashesPerSecond ? NetHashesPerSecond : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Start Date:
//                 <br />
//               </strong>
//               {StartDate ? StartDate : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Total Coins Mined:
//                 <br />
//               </strong>
//               {TotalCoinsMined ? TotalCoinsMined : "N/A"}
//             </p>
//             <p>
//               <strong>
//                 Total Coin Supply:
//                 <br />
//               </strong>
//               {TotalCoinSupply ? TotalCoinSupply : "N/A"}
//             </p>
//           </div>
//         </div>
//       </div>
//    )}
//   }
// }

// export default TechnicalInfo;
