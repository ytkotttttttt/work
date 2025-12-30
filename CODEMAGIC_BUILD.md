# Codemagic iOS Build Guide

## 🚀 Quick Setup for CRYPTO ICE v4

### Step 1: Create Account
1. Go to **codemagic.io**
2. Click **"Get started for free"**
3. Sign up with **GitHub** (recommended)
4. Verify email

### Step 2: Add Your Project
1. Click **"Add application"**
2. Choose **"GitHub"** (or upload ZIP)
3. Select your repository or upload files
4. Choose **"iOS"** platform

### Step 3: Configure Build

#### Build Settings:
- **Workflow**: iOS
- **Xcode Version**: 14.2 (oder 14.1, 14.0, 13.4.1)
- **Configuration**: Release
- **Scheme**: App

#### Environment Variables:
```
BUNDLE_ID: com.cryptoice.app
APP_NAME: CRYPTO ICE v4
```

### Step 4: Code Signing

#### Option A: Codemagic Managed (Easiest)
1. Go to **Code signing identities**
2. Click **"Create new"**
3. Upload your Apple Developer certificate
4. Upload provisioning profile

#### Option B: Automatic Setup
1. Connect **Apple Developer account**
2. Let Codemagic create certificates
3. Auto-generate provisioning profiles

### Step 5: Start Build
1. Click **"Start new build"**
2. Select **iOS workflow**
3. Wait for build (5-10 minutes)
4. Download **.ipa file**

## 📱 Install Your IPA

### Method 1: Direct Install
1. Connect iPhone to computer
2. Use **3uTools** (Windows) or **Xcode** (Mac)
3. Install .ipa file

### Method 2: AltStore
1. Install AltStore on iPhone
2. Transfer .ipa to iPhone
3. Open with AltStore

### Method 3: TestFlight
1. Upload to App Store Connect
2. Add testers
3. Install via TestFlight app

## ⚡ Codemagic Benefits

- ✅ **Free tier** available (500 build minutes/month)
- ✅ **No Mac required**
- ✅ **Automatic code signing**
- ✅ **Fast builds**
- ✅ **GitHub integration**

## 🔧 Troubleshooting

### Build Fails:
- Check bundle ID matches Apple Developer
- Verify certificates are valid
- Ensure provisioning profile includes devices

### Code Signing Issues:
- Use Codemagic's automatic signing
- Upload correct certificate type (distribution)
- Check provisioning profile expiration

## 🎯 Success!

Once complete, you'll have:
- Working `crypto.ipa` file
- Ready to install on iPhone
- Professional app build

Your CRYPTO ICE v4 app will be live on iOS! 🚀
