```typescript
/**
 * 复仇者
 * @global
 * @exports
 */
class CNAvenger extends IRDSQRCharacter {
    constructor() {
        base.constructor();
    }
	/**
	 * 写入一个字节数，范围0~255
	 * @param {integer} byte - 要写入的字节数
	 * @returns {null}
	 */
	function sq_binaryData_writeByte(byte) {}
	function sq_ani_GetFrameStartTime() {}
	function sq_ani_GetCurrentTime() {}

	/**
	 * 写入一个字（2字节），范围0~65535
	 * @param {integer} word - 要写入的字（2字节）
	 * @returns {null}
	 */
	function sq_binaryData_writeWord(word) {}
	function sq_m_getDirection() {}
	function sq_ani_IsEnd() {}
	function sq_p00_sendCreatePassiveObjectPacket() {}

	/**
	 * 开始写入二进制数据
	 * @returns {null}
	 */
	function sq_binaryData_startWrite() {}
	function sq_ani_rewind() {}
	function sq_ani_GetCurrentFrameIndex() {}

	/**
	 * 写入一个浮点数，范围-3.40282347E+38~3.40282347E+38
	 * @param {integer} float - 要写入的浮点数
	 * @returns {null}
	 */
	function sq_binaryData_writeFloat(float) {}
	function sq_ani_getCurrentFrameTime() {}

	/**
	 * 获取跳跃攻击动画
	 * @returns {CNRDAnimation} 跳跃攻击动画对象
	 */
	function getJumpAttackAni() {}
	function sq_ani_getDelaySum() {}
	function sq_ani_isKeyFrameFlag() {}
	function getGrabActiveObject() {}

	/**
	 * 写入一个双字（4字节），范围0~4294967295
	 * @param {integer} dword - 要写入的双字（4字节）
	 * @returns {null}
	 */
	function sq_binaryData_writeDword(dword) {}
	function setGrabActiveObject() {}
	function sq_ani_SetCurrentTimeByFrame() {}

	/**
	 * 写入一个布尔值，范围true~false
	 * @param {boolean} bool - 要写入的布尔值
	 * @returns {null}
	 */
	function sq_binaryData_writeBool(bool) {}
	function getSmasherEventTimer() {}
	function getSmasherDashTime() {}
	function sq_SAFE_DELETE() {}
	function sq_ani_setSpeedRate() {}
	function sq_ani_clearKeyFrameFlag() {}
	function getSmasherState() {}
}
```