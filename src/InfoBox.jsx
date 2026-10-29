import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    
    
    return (
        <div className="InfoBox">
            <Card className="weather-card">
                <div className="weather-image">
                    <CardMedia
                        component="img"
                        image={
                            info.humidity > 80
                                ? RAINY_URL
                                : info.temp > 15
                                ? HOT_URL
                                : COLD_URL
                        }
                        alt="Weather"
                    />
                </div>

                <CardContent className="weather-content">
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="city-name"
                    >
                        {info.city}

                        {info.humidity > 80 ? (
                            <ThunderstormIcon />
                        ) : info.temp > 15 ? (
                            <SunnyIcon />
                        ) : (
                            <AcUnitIcon />
                        )}
                    </Typography>

                    <Typography className="weather-condition">
                        {info.weather}
                    </Typography>

                    <div className="main-temperature">
                        {info.temp}°C
                    </div>

                    <p className="feels-like">
                        Feels like {info.feelsLike}°C
                    </p>

                    <div className="weather-details">
                        <div className="weather-detail">
                            <span>Humidity</span>
                            <strong>{info.humidity}%</strong>
                        </div>

                        <div className="weather-detail">
                            <span>Min Temperature</span>
                            <strong>{info.tempMin}°C</strong>
                        </div>

                        <div className="weather-detail">
                            <span>Max Temperature</span>
                            <strong>{info.tempMax}°C</strong>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}