module.exports = () => {
	return `@import 'true';
@import '../../main';

$_test-environment: true;

@import 'main.test';
`;
};
