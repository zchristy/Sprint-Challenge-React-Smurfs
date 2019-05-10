import styled from 'styled-components';

// ==== Button ====
export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #DADADA;
  border-radius: 2px;
  background-color: #F9F9F9;
  font-size: 1.2rem;
  padding: 5px 20px;
  margin-top: 10px;
  transition: all .3s ease;

  &:hover {
    color: #FFF;
    background-color: #DADADA;
    transform: scale(1.1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 20px auto;
`;

// ==== App ====
export const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// ==== Nav ====
export const NavContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #030376;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: white;
    text-decoration: none;

    h4 {
      margin: 0 10px;
      transition: all .3s ease;

      &:hover {
        color: #CDCDCD;
        transform: scale(1.1);
      }
    }
  }
`;

// ==== SmurfsList ====
export const SmurfsContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;


// ==== Smurf ====
export const SmurfContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
`;
export const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 20px auto;
  box-shadow: 5px 5px 8px -1px rgba(123,123,123,0.75);
  -webkit-box-shadow: 5px 5px 8px -1px rgba(123,123,123,0.75);
  -moz-box-shadow: 5px 5px 8px -1px rgba(123,123,123,0.75);
  background-color: #fff;
  color: #444444;
  transition: all .5s ease;

    &:hover {
      transform: scale(1.02);
    }

    a {
      text-decoration: none;
      color: #343434;
      transition: all .3s ease;

      &:hover {
        transform: scale(1.05);
        color: #444444;
      }
    }

    h4 {
      margin: 20px;

      &:last-child {
        cursor: pointer;
      }
    }
`;

// ==== AddForm ====
export const FormContainer = styled.div`
  width: 30%;
  margin: 50px auto;

  h4 {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

   input {
     width: 100%;
     border: none;
     border-bottom: 1px solid #DADADA;
     background-color: #F9F9F9;
     font-size: 1.2rem;
     padding: 10px;
     outline: none;
   }
`;
