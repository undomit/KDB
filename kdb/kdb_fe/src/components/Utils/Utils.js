function getData(url) {
  fetch(url,
    {
      method: 'GET'
    }
  ).then(response => {
      if (response.status > 400) {
        return this.setState({
          message: "Something went wrong...",
        });
      }
      return response.json();
  })
  .then(data => {
    return data
  });
}
