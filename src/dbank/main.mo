import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor DBank {
    stable var currentValue:Float = 300;
    stable var startTime = Time.now();

    let id = 233424324325;
    // Debug.print(debug_show (startTime));
    // Debug.print(debug_show (currentValue));

    public func topUp(amount: Float){
        currentValue += amount;
        Debug.print(debug_show (currentValue));
    };

    public func withDraw(amount: Float){
        let tempValue: Float = currentValue - amount;
        if( tempValue >= 0){
            currentValue -= amount;
            Debug.print(debug_show (currentValue));
        }else{
            Debug.print(debug_show ("Amount too large"));
        }
    };
    
    public query func checlBalance(): async Float{
        return currentValue;
    };

    public func compound(){
        let currentTime = Time.now();
        let timeElapseNS = currentTime - startTime;
        let timeElapsedS = timeElapseNS / 1000000000;
        currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
        startTime := currentTime;
    }
}