import React, { useEffect, useState } from 'react';

import GeolocationService from '../../services/GeolocationService';
import WeatherService from '../../services/WeatherService';
import Card from '../card';
import IconButton from '../icon-button';
import { SpinnerService } from '../spinner';
import { ToastService } from '../toast';
import styles from './WeatherData.module.scss';

const WeatherData = () => {

    const [coords, setCoords] = useState(undefined);
    const [data, setData] = useState(undefined);
  
    useEffect(() => {    
      loadCurrentPosition();
    }, []);
  
    useEffect(() => {
      if (coords) {
        SpinnerService.on();
        WeatherService.getByGeographicCoordinates(coords)
          .then(response => {
            setData(response.data)
            ToastService.success({title:'Informação', message:'Dados da localização atual carregados com sucesso'});
          })
          .catch(() => ToastService.error({title:'Informação', message:'Erro ao carregar os dados da localização atual'}))
          .finally(() => SpinnerService.off());
      }
    }, [coords])
  
    const loadCurrentPosition = () => {
      GeolocationService.getCurrentPosition(setCoords);
    }

    const getDateFromUnixUTC = (value) => {
      return new Date(value * 1000).toLocaleDateString('pt-BR') 
    }

    const getHourFromUnixUTC = (value) => {
      return new Date(value * 1000).toLocaleTimeString('pt-BR') 
    }
  
    const renderUpdateButton = () => {
      return <IconButton icon="cloud-download" onClick={loadCurrentPosition}/>; 
    }
  
    const renderCurrentPosition = () => {
      return !data
        ? null
        : <Card title="Coordenadas" headerActions={renderUpdateButton}>
            <p>Suas coordenadas atuais são:</p>
            <p>Latitude: {coords.lat}</p>
            <p>Longitude: {coords.lon}</p>
          </Card>;    
    }
  
    const renderAddress = () => {
      return !data
        ? null
        : <Card title="Endereço">
            <p>País: {data.sys.country}</p>
            <p>Cidade: {data.name}</p>
          </Card>;
    }
  
    const renderWeather = () => {
      return !data
        ? null
        : <Card title="Clima">
            <div className={styles.Weather}>
              <div>
                <p>Data: {getDateFromUnixUTC(data.dt)}</p>
                <p>Hora: {getHourFromUnixUTC(data.dt)}</p>
                <p>Tempo: {data.weather[0].description}</p>
                <p>Temperatura: {data.main.temp} 'C</p>
                <p>Sensação térmica: {data.main.feels_like} 'C</p>
                <p>Temperatura mínima: {data.main.temp_min} 'C</p>
                <p>Temperatura máxima: {data.main.temp_max} 'C</p>
              </div>
              <div>
                <p>Nascer do sol: {getHourFromUnixUTC(data.sys.sunrise)}</p>
                <p>Por do sol: {getHourFromUnixUTC(data.sys.sunset)}</p>
                <p>Umidade: {data.main.humidity}%</p>
                <p>Visibilidade: {data.visibility} mt</p>
                <p>Velocidade do vento: {data.wind.speed} m/s</p>
              </div>
            </div>
          </Card>;
    }

    return (
        <div className={styles.WeatherData}>
          {renderCurrentPosition()}
          {renderAddress()}
          {renderWeather()}
        </div>
    );
}
 
export default WeatherData;