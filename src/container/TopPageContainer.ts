import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../action";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
  handleOnCahngeValue( valur: string): void
  handleOnSelectValue(value: string): void
  handleOnClick(): void
}

const mapStateToProps = (appState:AppState) => {
  return{
    inputValue: appState.state.inputValue,
    selectedValue: appState.state.selectedValue,
    clickCount: appState.state.clickCount
  }
}

const mapDispatchToProps = (dispathe: Dispatch) => {
  return{
    handleOnCahngeValue: (value: string) => { dispathe(TextInputActions.updateTextInputValue(value)) },
    handleOnSelectValue: (value: string) => { dispathe(TextInputActions.updateSelectedValue(value)) },
    handleOnClick: () => { dispathe(TextInputActions.updateClickCount())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopPageForm)