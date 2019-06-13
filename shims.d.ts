// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
declare namespace Mbit_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=Mbit_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;
    
	/**
     * button pushed.
     */
    //% blockId=ir_received_left_event_return
    //% block="on |%btn| button pressed than return 1" shim=Mbit_IR::onPressEventReturn
	function onPressEventReturn(btn: RemoteButton, body: () => void): int {
		return;
	}
    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=Mbit_IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
