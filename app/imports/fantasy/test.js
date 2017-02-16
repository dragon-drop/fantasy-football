if (typeof console['group'] !== 'function') {
  console.group = (name) => {
   console.log(`***** ${name} *****`);
  }
  console.groupEnd = () => {
   console.log(`**********`);
  }
}


function test(message, data, condition) {
    const valid = typeof condition === 'function'? condition(): condition;
    console[valid? 'info': 'error'](message, data, valid);
}

function testForError(errorMessage, method) {
    let errorThrown = false;

    try {
        method();
    } catch (error) {
        errorThrown = true;

        test('An error should be returned', error, () => {
            return (error instanceof Error)
            && (error.message === errorMessage);
        });
    }

    if (!errorThrown) console.error('No error thrown');
}

function Feature(name, feature) {
    console.group(name);
    feature();
    console.groupEnd();
}

function Scenario(name, scenario) {
    console.group(name);
    scenario();
    console.groupEnd();
}

function xScenario(name) {
    console.group(name);
    console.log('Pending');
    console.groupEnd();
}

export {
  Scenario,
  xScenario,
  Feature,
  test,
  testForError
};
