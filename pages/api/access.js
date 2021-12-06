async function handle(req, res) {
  if (req.method === "GET") {
    const accessToken =
      "ya29.a0ARrdaM_nVb-hXgqyKqZRYtJv-zhmgqbeKm4lNasVF_AqZBQUvJ6BpGVWLOsTNe1792f7VpvEGbAJ2toTxiiDvNjSAstRhzF006LgTonMDDqiPxWM_QhYsXPEpkS6qUxis8C5i0rmrHGIWuTXRBf85TCgjapy";

    res
      .status(200)
      .json({ message: "Access Token here", accessToken: accessToken });
  }
}

export default handle;
