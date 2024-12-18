Advance URL Shortner


The objective is to develop a powerful URL shortener API that offers the following functionalities:

Shorten URLs: Users can submit POST requests with the original URL in the request body. Your API should generate a unique or custom short code for the URL and store the mapping in a database.
Redirect with Advanced Tracking: When a user visits a shortened URL:
Track the visit (timestamp, user agent, IP address etc.) in a database.
Increment counters for total visits, unique visitors (using techniques like user ID hashing), and visits by device type (desktop, mobile etc.).
Redirect the user to the original URL (using a 302 Found status code).
Shortened URL Analytics: Users can send a GET request with the shortened code to retrieve detailed analytics:
Original URL
Total number of visits
Number of unique visitors
Breakdown of visits by device type (e.g., pie chart data)
Top referring websites (optional: requires additional data capture during redirection)
Time series data of visits (e.g., hourly or daily visit counts over a period)
