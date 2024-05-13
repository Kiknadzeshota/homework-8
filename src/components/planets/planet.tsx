import data from "../../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Planet() {
  const Params = useParams();
  const Name = Params.planet;
  const planet = data.find((PlanetObj: PlanetData) => PlanetObj.name === Name);
  const [img, setImg] = useState<boolean>(true);
  const [content, setContent] = useState<boolean>(false);
  const [newImg, setNewImg] = useState<boolean>(false);
  const [imagess, setImagess] = useState<boolean>(false);
  return (
    <PlanetCard>
      <div className="planetinfo">
        <div className="imgdiv">
          {img === true ? (
            <img src={planet?.images.planet} alt="planet" />
          ) : null}
          {imagess === true ? (
            <img src={planet?.images.internal} alt="planet" />
          ) : null}
          {newImg === true ? (
            <img className="NewImg" src={planet?.images.geology} alt="planet" />
          ) : null}
        </div>
        <div className="infodiv">
          <div>
            <h1>{planet?.name}</h1>
            {img === true ? <p>{planet?.overview.content}</p> : null}
            {content === true ? <p>{planet?.structure.content}</p> : null}
            {newImg === true ? <p>{planet?.geology.content}</p> : null}
            <span>
              Source : <a href={planet?.overview.source}>Wikipedia</a>
            </span>
          </div>
          <div>
            <button
              onClick={() => {
                setContent(false);
                setNewImg(false);
                setImagess(false);
                setImg(true);
              }}
              className="btnCreat"
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setImg(false);
                setNewImg(false);
                setContent(true);
                setImagess(true);
              }}
              className="btnCreat"
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setNewImg(true);
                setImg(false);
                setContent(false);
                setImagess(true);
              }}
              className="btnCreat"
            >
              03 SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <div className="Divend">
        <div>
          <h1>ROTATION TIME</h1> <h2>{planet?.rotation}</h2>
        </div>
        <div>
          <h1>REVOLUTION TIME</h1> <h2>{planet?.revolution}</h2>
        </div>
        <div>
          <h1>RADIUS</h1> <h2>{planet?.radius}</h2>
        </div>
        <div>
          <h1>AVERAGE TEMP.</h1> <h2>{planet?.temperature}</h2>
        </div>
      </div>
    </PlanetCard>
  );
}

const PlanetCard = styled.div`
  max-width: 1340px;
  margin: 20px auto;
  padding: 150px 15px;

  .planetinfo {
    display: flex;
    .imgdiv {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .NewImg {
        position: absolute;
        width: 163px;
        height: 199px;
        top: 70%;
      }
    }
    .infodiv {
      width: 35%;
      h1 {
        color: white;
        font-family: Antonio;
        font-size: 80px;
        font-weight: 400;
        line-height: 103.52px;
        text-align: left;
      }
      p {
        font-family: League Spartan;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: #838391;
        padding: 24px 0;
      }
      span {
        color: #38384f;
        font-family: League Spartan;
        font-size: 16px;
        font-weight: 700;
        line-height: 25px;
        a {
          font-family: League Spartan;
          color: #838391;
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          text-decoration: underline;
        }
      }
      .btnCreat {
        width: 100%;
        text-align: left;
        background-color: transparent;
        padding: 11px 30px;
        font-family: League Spartan;
        font-size: 15px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 2.5714285373687744px;
        border: 1px solid #838391;
        margin: 8px 0;
        color: white;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #38384f;
          border: 1px solid transparent;
        }
        &:focus {
          background-color: #419ebb;
        }
      }
    }
    @media screen and (max-width: 786px) {
      flex-direction: column;
      .imgdiv {
        width: 100%;
      }
      .infodiv {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        div {
          width: 50%;
          .btnCreat {
            font-size: 12px;
          }
        }
      }
    }
  }
  .Divend {
    padding: 43px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
      width: 23%;
      border: 1px solid #838391;
      padding: 20px;
      h1 {
        font-family: League Spartan;
        font-size: 11px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 1px;
        text-align: left;
        color: #838391;
        @media screen and (max-width: 786px) {
          font-size: 10px;
          line-height: 16px;
          letter-spacing: 0.7272727489471436px;
          text-align: left;
        }
      }
      h2 {
        font-family: Antonio;
        font-size: 40px;
        font-weight: 400;
        line-height: 51.76px;
        letter-spacing: -1.5px;
        text-align: left;
        color: white;
        @media screen and (max-width: 786px) {
          font-family: Antonio;
          font-size: 24px;
          font-weight: 400;
          line-height: 31.05px;
          letter-spacing: -0.8999999761581421px;
          text-align: left;
        }
      }
    }
  }
`;
