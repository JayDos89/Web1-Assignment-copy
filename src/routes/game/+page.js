export async function load({ fetch }) {
    const res = await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": "fe001c03-d2d3-4b63-b299-4c5549b2bfc8",
      }),
      body: JSON.stringify({
        currency: "USD",
        code: "ETH",
        meta: true,
      }),
    });
    const btc = await res.json();
    console.log(btc)
    return { btc };

  }