import React from 'react';

import styles from './App.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header';
import WeatherData from './components/weather-data/WeatherData';
import Toast from './components/toast';

const App = () => {
  return (
    <div class={styles.App}>
        <Header />
        <WeatherData />
        <Footer />
        <Toast />
    </div>
  );
}
 
export default App;
