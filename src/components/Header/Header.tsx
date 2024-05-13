import styled from "styled-components";
import data from "../../data.json";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderComponent>
      <nav>
        <Link to={"/Earth"}>THE PLANETS</Link>
        <ul>
          {data.map((planet: PlanetData, index: number) => {
            return (
              <li key={index}>
                <Link to={`/${planet.name}`} content="">
                  {planet.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  border-bottom: 1px solid white;
  padding: 0px 15px;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      gap: 23px;
      padding: 20px 0px;
      li {
        a {
          color: white;
          font-family: League Spartan;
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 1px;
          text-align: left;
          padding: 20px 5px;
        }
      }
    }
    > a {
      color: white;
      font-size: 32px;
      font-weight: 400;
      line-height: 36.23px;
      font-family: Antonio;
      letter-spacing: -1.0499999523162842px;
    }
    @media screen and (max-width: 786px) {
      flex-direction: column;
      a {
        font-family: League Spartan;
        font-size: 11px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 1px;
        text-align: left;
      }
      > a {
        font-family: Antonio;
        font-size: 28px;
        font-weight: 400;
        line-height: 36.23px;
        letter-spacing: -1.0499999523162842px;
        text-align: left;
      }
    }
  }
`;
