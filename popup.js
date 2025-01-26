document.addEventListener('DOMContentLoaded', function() {
    const calendarButton = document.getElementById('calendar-btn');
    
    calendarButton.addEventListener('click', function() {
      // Get today's date in a format that Google Calendar understands (YYYYMMDDTHHMMSSZ)
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Get month (1-12)
      const day = String(now.getDate()).padStart(2, '0'); // Get day (01-31)
      const hours = String(now.getHours()).padStart(2, '0'); // Get hours (00-23)
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes (00-59)
      
      const startDate = `${year}-${month}-${day}T${hours}:${minutes}:00Z`; // Start time in ISO format
      const endDate = `${year}-${month}-${day}T${hours}:${parseInt(minutes) + 30}:00Z`; // End time (30 mins later)
      
      // Google Calendar URL format to create an event
      const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Focus%20Time&dates=${startDate}/${endDate}&details=Focus%20on%20tasks&location=&sf=true&output=xml`;
  
      // Open the Google Calendar in a new tab with pre-filled details
      window.open(googleCalendarUrl, '_blank');
    });
  });
  