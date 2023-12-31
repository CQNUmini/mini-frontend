import Taro from "@tarojs/taro";

// quality: 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。
const compressImage = async (filePath: string, quality: number = 90): Promise<string> => {
    let imagePath = '';
    try {
        const imageRes = await Taro.compressImage({
            src: filePath,
            quality: quality,
            compressedWidth: 900,
        });

        imagePath = imageRes.tempFilePath;
    } catch (err) {
        Taro.showToast({
            title: "图片处理失败",
            icon: "error",
            duration: 2000,
        });
    }

    return imagePath;
}

export default compressImage;