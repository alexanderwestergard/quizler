const addScore = async (name: string, score: number, quizId: number) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, score }),
    };

    const response = await fetch(
      'http://localhost:8080/' + quizId,
      requestOptions
    );

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.error.details[0].message);
    }
  } catch (error) {
    // setErrorMessage(`${error}`);
  }
};
