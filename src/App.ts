import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {

	private mounted(): void {
		console.log('\u001b[33m' + 'This text is red. ');
	}
}