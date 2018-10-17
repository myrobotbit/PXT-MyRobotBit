/**
  * Custom block coding for control Motor.
  */
enum motorDIR {
    //% block="forward"
    Forward,
    //% block="reverse"
    Reverse
}

/**
 * Custom blocks
 */
//% weight=50 color=#ff6600 icon="\uf11e"
namespace MyRobotBit {
      
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="Mybit_Motor" block="motor %motorDIR|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=95
    export function Motor(Motor: motorDIR, speed: number): void {  
        let motorspeed = pins.map(speed,0,100,0,1023)     
        if (Motor == motorDIR.Forward) {
             pins.analogWritePin(AnalogPin.P13, motorspeed)
             pins.digitalWritePin(DigitalPin.P14, 0)
	     pins.analogWritePin(AnalogPin.P15, motorspeed)
             pins.digitalWritePin(DigitalPin.P16, 0)
        }
        if (Motor == motorDIR.Reverse) {
            pins.analogWritePin(AnalogPin.P14, motorspeed)
             pins.digitalWritePin(DigitalPin.P13, 0)
             pins.analogWritePin(AnalogPin.P16, motorspeed)
             pins.digitalWritePin(DigitalPin.P15, 0)
        }
    }
}
