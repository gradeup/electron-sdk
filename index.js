import fetch from "node-fetch";

class Electron {
  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  async prepareStream() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let body = {};

    try {
      const response = await fetch(`${this.url}/stream`, requestOptions);
      body = await response.json();
    } catch (error) {
      throw error;
    }

    return body;
  }

  async getStream(streamId) {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let body = {};

    try {
      const response = await fetch(
        `${this.url}/stream/${streamId}`,
        requestOptions
      );
      body = await response.json();
    } catch (error) {
      throw error;
    }

    return body;
  }

  async liveStream(streamId) {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let body = {};

    try {
      const response = await fetch(
        `${this.url}/stream/${streamId}/live`,
        requestOptions
      );
      body = await response.json();
    } catch (error) {
      throw error;
    }

    return body;
  }

  async resetStream(streamId) {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let body = {};

    try {
      const response = await fetch(
        `${this.url}/stream/${streamId}/reset`,
        requestOptions
      );
      body = await response.json();
    } catch (error) {
      throw error;
    }

    return body;
  }

  async stopStream(streamId) {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    let body = {};

    try {
      const response = await fetch(
        `${this.url}/stream/${streamId}/stop`,
        requestOptions
      );
      body = await response.json();
    } catch (error) {
      throw error;
    }

    return body;
  }
}

export default Electron;
