import './App.css'
import SliderOne from './components/SliderOne'
import SliderTwo from './components/SliderTwo'

function App() {
  return (
    <>
      <div className="container">
        <div className="col-1">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla mauris a efficitur fermentum. Aliquam erat volutpat. Pellentesque semper ante non molestie mollis. Donec efficitur elit ut tortor sagittis, in elementum neque pretium. Nam sollicitudin turpis a justo blandit semper. Nullam et vulputate ante. Quisque imperdiet nisi lacus, sit amet fringilla augue facilisis et. Fusce varius diam quis laoreet porta.
          </p>
        </div>

        <div className="col-2">
          <SliderOne />
        </div>
      </div>

      <div className="wrapper">
        <SliderTwo />
      </div>
    </>
  )
}

export default App
