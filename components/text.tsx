import {Text as RNText} from 'react-native';

export const Text2: React.FC<any> = ({ className, children }) => {
    return <RNText className={className} style={[{ textAlign: 'center' }]}>{children}</RNText>;
};

export const Text3: React.FC<any> = ({ className, children }) => {
    return <RNText className={className} style={{ textAlign: 'center' }}>{children}</RNText>;
};
