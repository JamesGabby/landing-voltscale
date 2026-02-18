import Script from 'next/script'

const CalendlyWidget = () => {
  return (
    <>
      {/* The Widget Container */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/jamesgabbitus/30min" 
        style={{ minWidth: '320px', height: '700px' }} 
      />

      {/* The External Script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default CalendlyWidget