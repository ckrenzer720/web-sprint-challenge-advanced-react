// Write your tests here
beforeAll() {
  render(<AppFunctional />)
}

describe() {
  test('all buttons; up, down, left, right, and reset work as they should) {
    }
}

/*
  getBy -- will always fail unless the test is 100% accurate --> exactly what you want

  queryBy --> does not fail a test case, just gives a false value if value does not exist
    only if followed by expect -- true or false

  findBy --> returns and waits for a promise. A combination of both getBy and queryBy -- APIs and async calls
*/
