const request = require('request');
const rp = require('request-promise');

async function prepareStream(token, url) {
  var options = {
    uri: `${url}/stream`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  let body;

  try {
    body = await rp(options);
  } catch (error) {
    throw error;
  }

  return body;
}

async function getStream(token, url, streamId) {
  var options = {
    uri: `${url}/stream/${streamId}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  let body;

  try {
    body = await rp(options);
  } catch (error) {
    throw error;
  }

  return body;
}

async function liveStream(token, url, streamId) {
  var options = {
    uri: `${url}/stream/${streamId}/live`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  let body;

  try {
    body = await rp(options);
  } catch (error) {
    throw error;
  }

  return body;
}

async function resetStream(token, url, streamId) {
  var options = {
    uri: `${url}/stream/${streamId}/reset`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  let body;

  try {
    body = await rp(options);
  } catch (error) {
    throw error;
  }

  return body;
}

async function stopStream(token, url, streamId) {
  var options = {
    uri: `${url}/stream/${streamId}/stop`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  let body;

  try {
    body = await rp(options);
  } catch (error) {
    throw error;
  }

  return body;
}

module.exports = {
  prepareStream,
  getStream,
  liveStream,
  stopStream,
  resetStream,
};
